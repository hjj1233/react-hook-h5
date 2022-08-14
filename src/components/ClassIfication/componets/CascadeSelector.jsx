import React from 'react'
import { TreeSelect } from 'antd-mobile'
import { CascadeSelectorBox } from './CascadeSelectorStyle'

export default function CascadeSelector() {
  const options3 = [
    {
      label: '分类A',
      value: 'A',
      children: [
        {
          label: '分类A-1',
          value: 'A1',
        },
        {
          label: '分类A-2',
          value: 'A2',
        },
        {
          label: '分类A-3',
          value: 'A3',
        },
        {
          label: '分类A-4',
          value: 'A4',
        },
      ],
    },
    {
      label: '分类B',
      value: 'B',
      children: [
        {
          label: '分类B-1',
          value: 'B1',
        },
        {
          label: '分类B-2',
          value: 'B2',
        },
      ],
    },
    {
      label: '分类C',
      value: 'C',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
      ],
    },
    {
      label: '分类D',
      value: 'D',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D1',
      value: 'D1',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D2',
      value: 'D2',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D3',
      value: 'D3',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D4',
      value: 'D4',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D5',
      value: 'D5',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D6',
      value: 'D6',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D7',
      value: 'D7',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
    {
      label: '分类D8',
      value: 'D8',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
        },
        {
          label: '分类D-2',
          value: 'D2',
        },
      ],
    },
  ]

  return (
    <CascadeSelectorBox>
      <TreeSelect
        defaultValue={['A', 'A1']}
        options={options3}
        onChange={(value, nodes) => {
          console.log(value, nodes)
        }}
      />
    </CascadeSelectorBox>
  )
}
