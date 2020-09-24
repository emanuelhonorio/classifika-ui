import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  OnDestroy,
} from "@angular/core";
import {
  Anuncio,
  Categoria,
  Contato,
} from "src/app/core/models/classifika-models";
import { CategoriaService } from "src/app/modules/categoria/services/categoria.service";
import { LocalizacaoService } from "src/app/modules/localizacao/services/localizacao.service";
import { AnuncioService } from "../../services/anuncio.service";
import { AccountService } from "src/app/modules/account/services/account.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { DomSanitizer } from "@angular/platform-browser";
import { take } from "rxjs/operators";
import { FileUpload } from "primeng-lts/fileupload";

interface CategoriaDropdown {
  label?: string;
  value?: Categoria;
}

interface ContatoDropdown {
  label?: string;
  value?: Contato;
}

@Component({
  selector: "app-anuncio-form",
  templateUrl: "./anuncio-form.component.html",
  styleUrls: ["./anuncio-form.component.scss"],
})
export class AnuncioFormComponent implements OnInit, OnChanges {
  @Input()
  anuncio: Anuncio = {};

  @Input()
  updating: boolean = false;

  @Output()
  submit = new EventEmitter();

  categorias: Categoria[] = [];
  categoriasDropdown: CategoriaDropdown[] = [];
  contatosDoUsuario: Contato[] = [];
  contatosDropDown: ContatoDropdown[] = [];
  isSubmitting = false;

  novoContato: Contato = {};
  modalContato = false;

  @ViewChild("fotosComponent", { static: true })
  fotosComponent: FileUpload;
  uploadedFiles: any[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private localizacaoService: LocalizacaoService,
    private accountService: AccountService,
    private anuncioService: AnuncioService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initCategorias();
    this.initContatos();
  }

  async ngOnChanges() {
    if (this.anuncio && this.anuncio.id) {
      for (let foto of this.anuncio.fotos) {
        let file = await this.fotoToFile(foto);
        this.fotosComponent.files.push(file);
      }
    }
  }

  async fotoToFile(foto) {
    return fetch(foto.url)
      .then((res) => {
        return res.blob();
      })
      .then((buf) => {
        let file = new File([buf], `foto_${new Date().getTime()}`, {
          type: "image/png",
        });
        (<any>file).objectURL = this.sanitizer.bypassSecurityTrustResourceUrl(
          URL.createObjectURL(buf)
        );
        return file;
      });
  }

  onSelect(event) {
    console.log(event.files);
    console.log(this.fotosComponent.files);
  }

  initCategorias() {
    this.categoriaService
      .listarCategorias()
      .pipe(take(1))
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
        this.categoriasDropdown = [];
        this.categoriasDropdown.push({
          label: "Selecione uma categoria",
          value: null,
        });
        for (let categoria of this.categorias) {
          this.categoriasDropdown.push({
            label: categoria.nome,
            value: categoria,
          });
        }
      });
  }

  initContatos() {
    this.accountService
      .getContatos()
      .pipe(take(1))
      .subscribe((contatos: Contato[]) => {
        this.contatosDoUsuario = contatos;

        this.contatosDropDown = [];
        this.contatosDropDown.push({
          label: "Selecione um contato",
          value: null,
        });
        for (let contato of this.contatosDoUsuario) {
          this.contatosDropDown.push({
            label: contato.telefone,
            value: contato,
          });
        }
      });
  }

  async uploadFotos(event) {
    this.uploadedFiles = [];
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    await this.anuncioService
      .uparFotos(this.uploadedFiles, this.anuncio.id)
      .toPromise();

    console.log("fotos adicionadas");
    this.router.navigate(["/meus-anuncios"]);
    this.isSubmitting = false;
  }

  consultarCep() {
    if (this.anuncio.cep && this.anuncio.cep.length === 8) {
      this.localizacaoService
        .consultarCep(this.anuncio.cep)
        .pipe(take(1))
        .subscribe((data: any) => {
          if (data.erro) {
            this.toastr.error("CEP inválido, insira-o novamente");
            this.anuncio.cep = "";
          } else {
            this.anuncio.uf = data.uf;
            console.log(data);
          }
        });
    }
  }

  anunciar(form: any) {
    this.isSubmitting = true;

    if (this.updating) {
      this.anuncioService
        .atualizar(this.anuncio)
        .pipe(take(1))
        .subscribe(
          (anuncio: Anuncio) => {
            this.anuncio.id = anuncio.id;
            this.fotosComponent.upload();

            this.fotosComponent.onUpload.pipe(take(1)).subscribe((up) => {
              this.toastr.success("Anuncio Atualizado");
              this.router.navigate(["/meus-anuncios"]);
            });
          },
          (err) => {
            this.toastr.error(
              "Algo deu errado, verifique se os campos foram inseridos corretamente"
            );
            this.isSubmitting = false;
          }
        );
    } else {
      this.anuncioService
        .anunciar(this.anuncio)
        .pipe(take(1))
        .subscribe(
          (anuncio: Anuncio) => {
            this.anuncio.id = anuncio.id;
            this.fotosComponent.upload();
            this.fotosComponent.onUpload.pipe(take(1)).subscribe((up) => {
              this.toastr.success("Anuncio Publicado");
              this.router.navigate(["/meus-anuncios"]);
            });
          },
          (err) => {
            this.toastr.error(
              "Algo deu errado, verifique se os campos foram inseridos corretamente"
            );
            this.isSubmitting = false;
          }
        );
    }
  }

  addContato() {
    this.accountService
      .addContato(this.novoContato)
      .pipe(take(1))
      .subscribe(() => {
        this.initContatos();
      });
    this.modalContato = false;
  }
}
