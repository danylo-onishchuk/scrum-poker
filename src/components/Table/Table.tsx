import { FC } from 'react';
import { Client } from '../types';
import './Table.css';

interface Props {
  clients: Client[];
  opacity: number;
}

export const BasicTable: FC<Props> = ({ clients, opacity }) => {
  return (
    <div className="tableWrapper">
      {clients.map(client => (
        <div key={client.id} className="clientsWrapper">
          <div>
            {client.name}
          </div>
          <div style={{ opacity }}>
            {client.points || 0}
          </div>
          {client.ready && (
            <div>I choosed card!</div>
          )}
        </div>
      ))}
    </div>
  );
};
