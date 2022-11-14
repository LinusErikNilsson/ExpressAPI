import { Request, Response } from "express";
import { Post } from './post.model';

let posts: Post[] = [{
  id: 1,
  title: "Awesome new EV for new markets",
  header: "Ditch your old car, this new one will drive circles around it",
  content: "Lorum",
},
{
  id: 2,
  title: "Magic trick which will make your day better",
  header: "Tired every morning, feeling unenergize - this will solve it",
  content: "Lorum",
}
];

export const getAllPosts = (req: Request, res: Response) => 
{
  if (posts.length <= 0) 
  {
    res.status(404).send('No posts availible');
  }
  else 
  {
    res.status(200).json(posts);
  }
}

export const createNewPost = (req: Request, res: Response) =>
{
  let newPost: Post = 
  {
    id: req.body.id,
    title: req.body.title,
    header: req.body.header,
    content: req.body.content
  };

  posts.push(newPost);
  res.status(201).json(newPost);
};

export const updatePostById = (req: Request, res: Response) =>
{
  let post = posts.find((post) => post.id === parseInt(req.params.id));
  if (!post)
  {
    res.status(404).send("No Post with this ID was found");
  }
  if (post)
  {
    posts.splice(posts.indexOf(post), 1); 
  }
      post =
      {
        id: req.body.id,
        title: req.body.title,
        header: req.body.header,
        content: req.body.content
      };
    
    posts.push(post);
    res.status(200).json(post);
};

export const removePostById = (req: Request, res: Response) =>
{
  const post = posts.find((post) => post.id === parseInt(req.params.id));

  if (!post)
  {
    res.status(404).send("No post with this ID was found");
  }
  else
  {
    posts.splice(posts.indexOf(post), 1);
    res.status(204).json(post);
  }
};

