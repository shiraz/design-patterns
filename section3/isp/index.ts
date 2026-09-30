// create posts
// commenting posts
// sharing posts

// Admin - 3 do all 3 above.
// Regular - commenting and sharing.

interface Post {
  title: string;
  content: string;
}

interface CreatePost {
  createPost(post: Post): void;
}

interface CommentOnPost {
  commentPost(cmt: string, post: Post): void;
}

interface Share {
  sharePost(post: Post): void;
}

class Admin implements CreatePost, CommentOnPost, Share {
  createPost(post: Post): void {
    console.log(`Admin created a post: ${post.title}`);
  }

  commentPost(cmt: string, post: Post): void {
    console.log(`Admin commented on a post: ${cmt} on post: ${post.title}`);
  }

  sharePost(post: Post): void {
    console.log(`Admin shared a post: ${post.title}`);
  }
}

class Regular implements CommentOnPost, Share {
  commentPost(cmt: string, post: Post): void {
    console.log(`Regular user commented on a post: ${cmt} on post: ${post.title}`);
  }

  sharePost(post: Post): void {
    console.log(`Regular user shared a post: ${post.title}`);
  }
}
