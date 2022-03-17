type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
};

type State = {
  posts: Post[];
  user: User | {};
};

export type { Post, User, State };
