const BASE_URL = '/api/room/';

export default {
  create,
  getRooms,
  deleteRoom,
  addRoomToInventory,
  addItemToRoom,
  deleteItemFromRoom,
  updateRoom
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

function getRooms() {
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

function addItemToRoom(item) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(item)
  };
  return fetch(BASE_URL, options).then(res => res.json());

}

function deleteItemFromRoom(item) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(item)
    };
    return fetch(BASE_URL, options).then(res => res.json());
  
  }
  

function updateRoom(room) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(room)
  };
  return fetch(BASE_URL + "update", options).then(res => res.json());
}

function deleteRoom(room) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(room)
  };
  return fetch(BASE_URL + "update", options).then(res => res.json());
}
