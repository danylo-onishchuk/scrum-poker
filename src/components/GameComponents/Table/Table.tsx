import { FC } from 'react';
import { Client } from '../../../types';
import classNames from 'classnames';
import './Table.css';

interface Props {
  clients: Client[];
  opacity: number;
}

export const BasicTable: FC<Props> = ({ clients, opacity }) => {
  return (
    <div className="tableWrapper">
      {clients.map(client => (
        <div className='client' key={client.id} >
          <div className='card'>
            <div className={
              classNames({
                'front': true,
                'rotate': !client.ready,
              })}>
              {client.ready && (
                <div>I choosed card!</div>
              )}
              <div style={{ opacity }}>
                {client.points || ''}
              </div>
            </div>
          </div>
          <div>
            {client.name}
          </div>
        </div>
      ))}
    </div>
  );
};
