function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Gestão de Notebooks')
    .addItem('Abrir Interface', 'abrirInterface')
    .addToUi();
}

function abrirInterface() {
  const html = HtmlService.createHtmlOutputFromFile('Interface')
    .setWidth(300)
    .setHeight(250);
  SpreadsheetApp.getUi().showModalDialog(html, 'Gestão de Notebooks');
}

function saidaParaManutencaoUI() {
  const ui = SpreadsheetApp.getUi();
  const numDemanda = ui.prompt('Saída para Manutenção', 'Informe o Nº da Demanda:', ui.ButtonSet.OK_CANCEL).getResponseText();
  const numNotebook = ui.prompt('Saída para Manutenção', 'Informe o Nº do Notebook:', ui.ButtonSet.OK_CANCEL).getResponseText();
  const descricaoProblema = ui.prompt('Saída para Manutenção', 'Informe a Descrição do Problema:', ui.ButtonSet.OK_CANCEL).getResponseText();
  
  if (numDemanda && numNotebook && descricaoProblema) {
    const sheetManutencao = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Manutenção');
    const sheetNotebook = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Notebooks');
    const notebookData = sheetNotebook.getDataRange().getValues();
    
    for (let i = 1; i < notebookData.length; i++) {
      if (notebookData[i][0] == numNotebook) {
        sheetNotebook.getRange(i + 1, 5).setValue('manutenção');  // Atualiza Status
        const patrimonio = notebookData[i][1];  // Patrimonio do notebook
        
        const lastRow = sheetManutencao.getLastRow() + 1;
        sheetManutencao.getRange(lastRow, 1).setValue(numDemanda);  // Nº da Demanda
        sheetManutencao.getRange(lastRow, 2).setValue(numNotebook);
        sheetManutencao.getRange(lastRow, 3).setValue(patrimonio);
        sheetManutencao.getRange(lastRow, 4).setValue(descricaoProblema);
        sheetManutencao.getRange(lastRow, 5).setValue(new Date());  // Data de Saída
        sheetManutencao.getRange(lastRow, 7).setValue('Em andamento');  // Status
        break;
      }
    }
  }
}

function retornoDeManutencaoUI() {
  const numNotebook = SpreadsheetApp.getUi().prompt('Retorno de Manutenção', 'Informe o Nº do Notebook:', SpreadsheetApp.getUi().ButtonSet.OK_CANCEL).getResponseText();
  if (numNotebook) {
    const sheetManutencao = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Manutenção');
    const sheetNotebook = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Notebooks');
    const notebookData = sheetNotebook.getDataRange().getValues();
    const manutencaoData = sheetManutencao.getDataRange().getValues();
    
    for (let i = 1; i < notebookData.length; i++) {
      if (notebookData[i][0] == numNotebook) {
        sheetNotebook.getRange(i + 1, 5).setValue('disponível');  // Atualiza Status
        break;
      }
    }
    
    for (let j = 1; j < manutencaoData.length; j++) {
      if (manutencaoData[j][1] == numNotebook && manutencaoData[j][6] == 'Em andamento') {
        sheetManutencao.getRange(j + 1, 6).setValue(new Date());  // Data de Retorno
        sheetManutencao.getRange(j + 1, 7).setValue('Concluído');  // Atualiza Status
        break;
      }
    }
  }
}

function saidaParaEmprestimoUI() {
  const numNotebook = SpreadsheetApp.getUi().prompt('Saída para Empréstimo', 'Informe o Nº do Notebook:', SpreadsheetApp.getUi().ButtonSet.OK_CANCEL).getResponseText();
  const destino = SpreadsheetApp.getUi().prompt('Saída para Empréstimo', 'Informe o Destino:', SpreadsheetApp.getUi().ButtonSet.OK_CANCEL).getResponseText();
  
  if (numNotebook && destino) {
    const sheetEmprestimo = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Empréstimo');
    const sheetNotebook = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Notebooks');
    const notebookData = sheetNotebook.getDataRange().getValues();
    
    for (let i = 1; i < notebookData.length; i++) {
      if (notebookData[i][0] == numNotebook) {
        sheetNotebook.getRange(i + 1, 5).setValue('emprestado');  // Atualiza Status
        const patrimonio = notebookData[i][1];  // Patrimonio do notebook
        
        const lastRow = sheetEmprestimo.getLastRow() + 1;
        sheetEmprestimo.getRange(lastRow, 1).setValue(`E-${lastRow}`);  // ID do Empréstimo
        sheetEmprestimo.getRange(lastRow, 2).setValue(numNotebook);
        sheetEmprestimo.getRange(lastRow, 3).setValue(patrimonio);
        sheetEmprestimo.getRange(lastRow, 4).setValue(new Date());  // Data de Saída
        sheetEmprestimo.getRange(lastRow, 6).setValue(destino);  // Destino
        sheetEmprestimo.getRange(lastRow, 7).setValue('Em andamento');  // Status
        break;
      }
    }
  }
}

function retornoDeEmprestimoUI() {
  const numNotebook = SpreadsheetApp.getUi().prompt('Retorno de Empréstimo', 'Informe o Nº do Notebook:', SpreadsheetApp.getUi().ButtonSet.OK_CANCEL).getResponseText();
  
  if (numNotebook) {
    const sheetEmprestimo = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Empréstimo');
    const sheetNotebook = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Notebooks');
    const notebookData = sheetNotebook.getDataRange().getValues();
    const emprestimoData = sheetEmprestimo.getDataRange().getValues();
    
    for (let i = 1; i < notebookData.length; i++) {
      if (notebookData[i][0] == numNotebook) {
        sheetNotebook.getRange(i + 1, 5).setValue('disponível');  // Atualiza Status
        break;
      }
    }
    
    for (let j = 1; j < emprestimoData.length; j++) {
      if (emprestimoData[j][1] == numNotebook && emprestimoData[j][6] == 'Em andamento') {
        sheetEmprestimo.getRange(j + 1, 5).setValue(new Date());  // Data de Retorno
        sheetEmprestimo.getRange(j + 1, 7).setValue('Concluído');  // Atualiza Status
        break;
      }
    }
  }
}
