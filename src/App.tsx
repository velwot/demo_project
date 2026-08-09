import { FormEvent, useEffect, useState } from 'react';

type Entry = {
  id: number;
  title: string;
  body: string;
  date: string;
};

const initialPosts: Entry[] = [
  { id: 1, title: 'Welcome', body: 'This is my personal space. I will share short updates here.', date: 'Today' },
];

const initialBlogs: Entry[] = [
  { id: 1, title: 'A fresh start', body: 'A quiet place for longer thoughts, lessons, and stories.', date: 'Today' },
];

function readSaved<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [bio, setBio] = useState(() => readSaved('personal-bio', 'Hello, I’m Narayan. Welcome to my corner of the internet.'));
  const [posts, setPosts] = useState(() => readSaved<Entry[]>('personal-posts', initialPosts));
  const [blogs, setBlogs] = useState(() => readSaved<Entry[]>('personal-blogs', initialBlogs));
  const [showEditor, setShowEditor] = useState<'bio' | 'post' | 'blog' | null>(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => localStorage.setItem('personal-bio', bio), [bio]);
  useEffect(() => localStorage.setItem('personal-posts', JSON.stringify(posts)), [posts]);
  useEffect(() => localStorage.setItem('personal-blogs', JSON.stringify(blogs)), [blogs]);

  function openEditor(type: 'bio' | 'post' | 'blog') {
    setShowEditor(type);
    setTitle('');
    setBody(type === 'bio' ? bio : '');
  }

  function saveEntry(event: FormEvent) {
    event.preventDefault();
    if (!showEditor) return;
    if (showEditor === 'bio') {
      setBio(body.trim());
    } else if (title.trim() && body.trim()) {
      const entry = { id: Date.now(), title: title.trim(), body: body.trim(), date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) };
      if (showEditor === 'post') setPosts((current) => [entry, ...current]);
      else setBlogs((current) => [entry, ...current]);
    }
    setShowEditor(null);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top">narayan<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#posts">Posts</a><a href="#blog">Blog</a><a href="#about">Bio</a></nav>
        <button className="primary-button" onClick={() => openEditor('post')}>New post</button>
      </header>

      <main id="top">
        <section className="intro" id="about">
          <p className="eyebrow">PERSONAL WEBSITE</p>
          <h1>Thoughts, updates,<br />and a little bit of me.</h1>
          <p className="bio">{bio}</p>
          <button className="text-button" onClick={() => openEditor('bio')}>Edit bio →</button>
        </section>

        <section className="content-section" id="posts">
          <div className="section-heading"><div><p className="eyebrow">THE LATEST</p><h2>Posts</h2></div><button className="text-button" onClick={() => openEditor('post')}>Add post →</button></div>
          <div className="post-list">{posts.map((post) => <article className="post-card" key={post.id}><time>{post.date}</time><h3>{post.title}</h3><p>{post.body}</p></article>)}</div>
        </section>

        <section className="content-section blog-section" id="blog">
          <div className="section-heading"><div><p className="eyebrow">LONGER READS</p><h2>Blog</h2></div><button className="text-button" onClick={() => openEditor('blog')}>Write blog →</button></div>
          <div className="blog-list">{blogs.map((blog) => <article className="blog-card" key={blog.id}><time>{blog.date}</time><h3>{blog.title}</h3><p>{blog.body}</p><span>Read entry →</span></article>)}</div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Narayan. Made simply.</footer>

      {showEditor && <div className="modal-backdrop" role="presentation"><form className="editor" onSubmit={saveEntry}><button type="button" className="close" aria-label="Close editor" onClick={() => setShowEditor(null)}>×</button><p className="eyebrow">{showEditor === 'bio' ? 'EDIT BIO' : showEditor === 'post' ? 'NEW POST' : 'NEW BLOG ENTRY'}</p><h2>{showEditor === 'bio' ? 'Tell people about yourself' : 'Share something new'}</h2>{showEditor !== 'bio' && <label>Title<input value={title} onChange={(event) => setTitle(event.target.value)} required autoFocus /></label>}<label>{showEditor === 'bio' ? 'Bio' : 'Your writing'}<textarea value={body} onChange={(event) => setBody(event.target.value)} required autoFocus={showEditor === 'bio'} rows={6} /></label><button className="primary-button" type="submit">Save</button></form></div>}
    </div>
  );
}
