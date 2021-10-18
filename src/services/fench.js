export default function fench(endpoint, options) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=92a1e8a051823dd85b7b52ae5c88070d`
    )
      .then((r) => {
        if (!r.ok) {
          reject(r.status);
        }
        return r.json();
      })
      .then(resolve);
  });
}