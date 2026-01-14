type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type PostEdit = Partial<Post>;

type PostSummary = Pick<Post, 'id' | 'title'>;

type PostReadonly = Readonly<Post>;