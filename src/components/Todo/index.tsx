import './Todo.css';

import * as React from 'react';

import { Tag } from 'antd';
import { Todo } from '../../typing';

export default function Todo({ content, isFinished, description }: Todo) {
  return (
    <div className='todo-item'>
      <div className={`text-wrapper${isFinished ? ' text--line' : ''}`}>
        <div className='text-con'>{content}</div>
        <div className='text-des'>{description}</div>
      </div>
      <Tag className='todo-status' color={isFinished ? '#87d068' : '#108ee9'}>
      {isFinished ? 'COMPLETED' : 'WAITING'}
      </Tag>
    </div>
  )
}