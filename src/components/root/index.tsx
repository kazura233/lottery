import React, { useState } from 'react'
import { Button, Input, Modal, Tag } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { randomColor, shuffle } from '../../utils'

const { TextArea } = Input

export const Root = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [list1, setList1] = useState<Array<string>>([])
  const [list2, setList2] = useState<Array<string>>([])

  /**
   *
   */
  const random = () => {
    const item = shuffle(list1.filter((item) => !list2.includes(item))).shift()
    item && setList2([...list2, item])
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url(./assets/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Button
        type="primary"
        shape="circle"
        icon={<SettingOutlined />}
        style={{ position: 'fixed', right: '50px', bottom: '50px', zIndex: 9999 }}
        onClick={() => setIsModalVisible(true)}
      />

      <Modal
        title="设置"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <TextArea
          value={list1.join('\n')}
          onChange={(value) => setList1(value.currentTarget.value.split('\n'))}
          rows={10}
        />
        <Button onClick={() => setList2([])}>重置抽奖结果池</Button>
      </Modal>

      <Button
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          height: 'unset',
          padding: '10px 20px',
          fontSize: '30px',
        }}
        onClick={random}
      >
        抽一个
      </Button>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        {list2.map((item) => (
          <Tag
            style={{
              padding: '10px 20px',
              fontSize: '24px',
              borderRadius: '25px',
              margin: '0 20px 20px 20px',
            }}
            color={randomColor()}
          >
            {item}
          </Tag>
        ))}
      </div>
    </div>
  )
}
