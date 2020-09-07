import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from 'react-bulma-components';
import './CreateInventory.css';

const CreateInventory = (props) => {
  return (
    <div className="card-image column is-one-third">
      <Card>
        <Link to= 'inventory'>
          <div className="card-image" >
            <h1>Where are the props?</h1>
          </div>
          <div className="card-content">
            <h1 class="title is-3">
              {props.user}
            </h1>
            {props}
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default CreateInventory;

