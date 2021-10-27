import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  date: Date = new Date();
  company: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.serialNum = this.randomSerial();
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
}
