export  function mermaidEval(markup: string) {
  let text = verifyAndCorrectMindmap(markup);
  if (!text.match(/^[a-zA-Z]/)) {
    text = text.split('\n').slice(1, -1).join('\n');
  }
  text = text.replace(/"`.*?`"/g, function(match: any) {
    return eval(match.slice(1, -1));
  });
  text = text.replace(/"\{.*?\}"/g, function(match: any) {
    return eval(match.slice(1, -1));
  });
  return text;
}

function verifyAndCorrectMindmap(text: string): string {
  const lines = text.split('\n');
  let rootFound = false;
  const correctedLines: string[] = [];

  lines.forEach(line => {
      const isRootNode = !line.startsWith(' ') && !line.startsWith('\t');
      if (isRootNode) {
          if (!rootFound) {
              rootFound = true;
          } else {
              line = '  ' + line;
          }
      } else if (rootFound && !line.startsWith('  ') && !line.startsWith('\t\t')) {
          line = '  ' + line;
      }
      correctedLines.push(line);
  });

  return replaceSpacesAndRemoveAccents(correctedLines.join('\n'))
}

function replaceSpacesAndRemoveAccents(input: string): string {
  if(!input.includes('erDiagram'))return input;
  const removeAccents = (str: string): string => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  const removeWhiteSpaces = (str: string): string => {
    return str.replace(/(?<=\w) (?=\w)/g, '_');
  }

  let output = removeAccents(input);
 
  return removeWhiteSpaces(output);
}


