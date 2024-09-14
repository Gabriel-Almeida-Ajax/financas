export function uriBuilder(
    uri,
    params,
    newPath,
  ) {
    const search = new URLSearchParams(uri.search);
    for (const key in params) {
      if (params[key] == null || params[key] === "" || params[key] === "null") {
        search.delete(key);
        continue;
      }
      search.set(key, (params)[key]);
    }
    return `${newPath ?? uri.pathname}?${search.toString()}`;
  }