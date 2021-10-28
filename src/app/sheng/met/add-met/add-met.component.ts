import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MetService } from '../../services/met.service';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-add-met',
  templateUrl: './add-met.component.html',
  styleUrls: ['./add-met.component.scss'],
})
export class AddMetComponent implements OnInit {
  title: string = '';
  serialNum: string = '691-69-0694';
  logo_url: any = 'https://dummyimage.com/100x100/050505/ededf0.png';
  met_des: string = '';
  date: Date[] = [new Date(), new Date()];
  company: string = '';
  last_update_time: Date = new Date('2021-10-28T14:18:59.522Z');
  met_pwd: string = 'mr1zG7bCWo';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '20rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: '請輸入會議資訊...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };

  // htmlSnippet:any = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  constructor(
    private sanitizer: DomSanitizer,
    private route: Router,
    private metService: MetService
  ) {}

  ngOnInit(): void {
    this.serialNum = this.randomSerial();
    // this.htmlSnippet=this.sanitizer.bypassSecurityTrustHtml(this.htmlSnippet)
    console.log({ add: this.metService.sortOrder });
  }

  goToList() {
    this.route.navigate(['/sheng/met']);
  }

  randomSerial(): string {
    const rdNum = () => (Math.random() * 10) | 0;
    return `${rdNum()}${rdNum()}${rdNum()}-${rdNum()}${rdNum()}-${rdNum()}${rdNum()}${rdNum()}`;
  }

  imgOperate(files: any, indicateObj: any): any {
    const [file] = files;
    const imgSrc = URL.createObjectURL(file);
    return { file, imgSrc, ...indicateObj };
  }

  uploadFile(): void {
    const ipt = document.createElement('input');
    ipt.type = 'file';
    ipt.addEventListener('change', (e: any) => {
      const [file] = e.target.files;
      const imgSrc = URL.createObjectURL(file);
      console.log(imgSrc);
      this.logo_url = this.sanitizer.bypassSecurityTrustResourceUrl(imgSrc);
    });
    ipt.click();
  }
  onSubmit(): void {
    const { title, serialNum, logo_url, met_des, date, company } = this;
    const update = {
      title,
      serialNum,
      logo_url,
      met_des,
      startDate: `${dayjs(date[0]).format('YYYY-MM-DDTHH:mm:ss')}`,
      endDate: `${dayjs(date[1]).format('YYYY-MM-DDTHH:mm:ss')}`,
      company,
    };

    alert(JSON.stringify(update));
    this.goToList();
  }
}
