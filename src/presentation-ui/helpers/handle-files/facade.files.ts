
type ExportTo = {
  to: {
    pdf: Function;
  }
}

export class FilesFacade {

  private _validTypes = {
    pdf: "pdf",
    docx: "docx",
  }

  async extractText(type: string, file: File) {
    switch (type) {
      case this._validTypes.pdf:
        return this.getTextFromPDF(file);
      case this._validTypes.docx:
        return this.getTextFromDocx(file);
      default:
        throw new Error("Invalid file type");
    }
  }

  exportFrom(htmlSanitized: string) : ExportTo {
    return {
      to : {
        pdf: () => this.printPDF(htmlSanitized),
      }
    }
  }

  async getTextFromPDF(file: File) {}

  async getTextFromDocx(file: File) {}

  private printPDF(htmlSanitized: string) {
    const frameName = 'printIframe';
    let docu: HTMLIFrameElement | null = document.querySelector(`iframe[name="${frameName}"]`);

    if (!docu) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = frameName;
      document.body.appendChild(iframe);
      docu = iframe;
    }

    const iframeDocument = docu.contentWindow?.document;
    if (iframeDocument) {
      iframeDocument.open();
      iframeDocument.write(`
          <html>
            <head>
              <style>
                ul, li, p, pre {
                  list-style: none;
                  font-size: 1.3rem;
                }
                .subtitles {
                  font-size: 1.6rem;
                  color: #60a5fa;
                  font-weight: 600;
                }
              </style>
            </head>
            <body>
              ${htmlSanitized}
            </body>
          </html>
        `);
      iframeDocument.close();
      docu.contentWindow?.print();  
    }
  }

}