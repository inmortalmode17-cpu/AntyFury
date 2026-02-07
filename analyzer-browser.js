const riskPatterns = {
  lenguaje: {
    palabras: [
      "libertad financiera",
      "ingresos pasivos",
      "método secreto",
      "sin experiencia",
      "desde tu celular"
    ],
    peso: 5
  },
  promesas: {
    palabras: [
      "resultados garantizados",
      "dinero asegurado",
      "sin riesgo"
    ],
    peso: 15
  },
  urgencia: {
    palabras: [
      "últimos cupos",
      "solo hoy",
      "oferta limitada"
    ],
    peso: 10
  }
};

function analizarTexto(texto) {
  let score = 0;

  const textoLower = texto.toLowerCase();

  for (const categoria in riskPatterns) {
    const { palabras, peso } = riskPatterns[categoria];

    palabras.forEach(palabra => {
      if (textoLower.includes(palabra)) {
        score += peso;
      }
    });
  }

  if (score > 100) score = 100;
  return score;
}
