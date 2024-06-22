import React, { useState } from 'react';
import { Input, Table } from 'antd';
import { SearchOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const { Column } = Table;

const Inventory = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex, placeholder) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={placeholder}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <button type="button" onClick={() => handleReset(clearFilters)} style={{ width: 90 }}>
          Reset
        </button>
        <button
          type="button"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 90 }}
        >
          Search
        </button>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] && record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  });

  const data = [
    {
      key: '1',
      name: 'Book 1',
      image: 'https://via.placeholder.com/150',
      link: '#',
      author: 'Kenning',
      booksold: 500,
      state: 'Delhi',
    },
    {
      key: '2',
      name: 'Book 2',
      image: 'https://via.placeholder.com/150',
      link: '#',
      author: 'Kenning',
      booksold: 1000,
      state: 'Delhi',
    },
    {
      key: '3',
      name: 'Book 3',
      image: 'https://via.placeholder.com/150',
      link: '#',
      author: 'Kenning',
      booksold: 2000,
      state: 'kolkata',
    },
  ];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps('name', 'Search Title'),
      render: (text, record) => (
        <div className="flex items-center">
          <img src={record.image} alt="Book cover" style={{ width: 50, marginRight: 8 }} />
          <a href={record.link}>{text}</a>
        </div>
      ),
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      sorter: (a, b) => a.author.localeCompare(b.author),
      ...getColumnSearchProps('author', 'Search Author'),
    },
    {
      title: 'Book Sold',
      dataIndex: 'booksold',
      key: 'booksold',
      sorter: (a, b) => a.booksold - b.booksold,
      render: (text, record) => {
        const increase = record.booksold > text;
        const changePercent = ((record.booksold - text) / text) * 100;
        return (
          <div>
            {increase ? (
              <CaretUpOutlined style={{ color: 'green' }} />
            ) : (
              <CaretDownOutlined style={{ color: 'red' }} />
            )}
            {Math.abs(changePercent).toFixed(2)}%
          </div>
        );
      },
    },
    {
      title: 'Top Selling State',
      dataIndex: 'state',
      key: 'state',
      sorter: (a, b) => a.state.localeCompare(b.state),
      ...getColumnSearchProps('state', 'Search State'),
    },
  ];

  return (
    <div>
      <Table dataSource={data} rowKey="key" columns={columns} />
    </div>
  );
};

export default Inventory;
