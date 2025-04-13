export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  imageUrl: string;
}