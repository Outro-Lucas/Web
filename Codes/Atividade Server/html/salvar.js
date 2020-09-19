 function salvar(){
    let texto = document.getElementById("nickname").value;

    let titulo = document.getElementById("nickname").value;

    let blob = new Blob([texto]){
      type: "text/plain;charset-utf-8"
    }
    saveAs(blob, titulo + ".txt");
  }
