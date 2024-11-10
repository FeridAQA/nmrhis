import React, { Fragment } from 'react';
import style from './index.module.scss';

function Info({ item }) {
  return (
    <div className={style.container}>
      {item && item.info.map((infoItem, j) => (
        <Fragment key={j}>
          <h2 className={style.title}>{infoItem.title}</h2>
          <p className={style.content} dangerouslySetInnerHTML={{ __html: infoItem.context }}></p>
          {/* Only render <hr /> if it's not the last item */}
          {j < item.info.length - 1 && <hr className={"line"} />}
        </Fragment>
      ))}
    </div>
  );
}

export default Info;
