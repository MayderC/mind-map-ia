
export class FilesFacade {

  private _validTypes = {
    pdf: "pdf",
    docx: "docx",
  }

  async getTextFromPDF(file: File): Promise<string> {}

  async getTextFromDocx(file: File): Promise<string> {}


  async extractText(type: string, file: File): Promise<string> {
    switch (type) {
      case this._validTypes.pdf:
        return this.getTextFromPDF(file);
      case this._validTypes.docx:
        return this.getTextFromDocx(file);
      default:
        throw new Error("Invalid file type");
    }
  }
}