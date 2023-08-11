export type DummyListType = {
  key: string;
  name: string;
  currentMessage: string | null;
  ipv6: string;
};

export const DummyList: DummyListType[] = [
  {
    key: '1',
    name: 'Swetank',
    currentMessage: null,
    ipv6: '2001:db8:85a3:8d3:1319:8a2e:370:7348',
  },
  {
    key: '2',
    name: 'Rahul',
    currentMessage: 'hello this is test',
    ipv6: '2561:db8:647f:8d3:1847:8a2e:857:87a8',
  },
];
