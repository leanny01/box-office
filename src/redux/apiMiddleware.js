const apiMiddleware = store => next => action => {
  console.log(`api middleware called`)
    if (!action.meta || action.meta.type !== "api") {
      return next(action);
    }
    console.log(`this is an api call`)


    const { url } = action.meta;
    const fetchOptions = Object.assign({}, action.meta);


    fetch(url, fetchOptions)

      .then(resp => resp.json())
      .then(json => {
        if (typeof action.meta.onSuccess === "function") {
          action.meta.onSuccess(json);
        }
        if (!json.success) {
          console.log(`Something went wrong; message: ${json.status_message}`)
        }

        return json;
      })
      .then(json => {

        let newAction = Object.assign({}, action, {
          payload: json
        });
        delete newAction.meta;
        store.dispatch(newAction);
      })
      .catch((e) => console.log(`Something went wrong
                                  message: ${e}`))
  };

  export default apiMiddleware;
