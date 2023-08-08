// A file for general utility functions

function railsIndexPath () {

}


function railsCreatePath () {

}


export function railsUpdatePath (model_title, object_id, model_params, optional_params = {}) {
  if (typeof model_title !== "string") {
    throw new Error('Model title must be a string')
  } else {
    console.log(`Model title is "${model_title}"`)
  }

  if (typeof object_id !== "number") {
    throw new Error('Object ID must be a number')
  }

  if (typeof model_params !== 'object') {
    throw new Error('Model parameters must be a Javascript object')
  }

  // const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(model: params, optional_params)
  //   };
  //   fetch(`/${model_title}/${id}/toggle_complete`, requestOptions)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       return data
  //     })
}

function railsShowPath () {

}

function railsDestroyPath () {

}