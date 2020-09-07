const BASE_URL = '/api/inventory/';

export default {
  create,
  getInventory,
  deleteInventory,
  addRoomToInventory,
  updateInventory,
  deleteRoomFromInventory
};

function create(room) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(room)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function getInventory() {
  return fetch(BASE_URL).then(res => res.json());
}

// function getNewRoom() {
//   return fetch(BASE_URL).then(res => res.json());
// }

function addRoomToInventory(room) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(room)
  };
  return fetch(BASE_URL, options).then(res => res.json());
  
}

function deleteRoomFromInventory(item) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(item)
  };
  return fetch(BASE_URL, options).then(res => res.json());

}

function updateInventory(inventory) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(inventory)
  };
  return fetch(BASE_URL + "update", options).then(res => res.json());
}

function deleteInventory(inventory) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(inventory)
  };
  return fetch(BASE_URL + "update", options).then(res => res.json());
}
