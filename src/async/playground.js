export async function runCode(url) {
    // Tu código aquí 👈
    // Validacion de Url
    const regex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)
    if (!regex.test(url)) throw new Error('Invalid URL')
    // Fetch and transform to json:
    //  en el catch lanzar error "Something was wrong"
    return await fetch(url)
      .then(res => res.json())
      .catch(() => { throw new Error('Something was wrong') })
  }