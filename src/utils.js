function getRangeRandom(yrange) {
    let valorRetonado = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    return valorRetonado;
  }