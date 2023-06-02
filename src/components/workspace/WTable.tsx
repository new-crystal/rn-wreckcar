'use client'
import * as React from 'react';

interface PropsType {
  items?: string[];
}

const WTable: React.FC<PropsType> = ({ items }) => {
  return (
    <>
      <table>
        <tbody>
          {items?.map((food: any) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default WTable;
