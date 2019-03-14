import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
  return (
    <div>正在加载, 请耐心等待, 谢谢.</div>
  );
};

export const LoadableDetail = Loadable({
  loader: () => import('./Detail'),
  loading: Loading,
});
