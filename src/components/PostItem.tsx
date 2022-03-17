import { Card, CardContent, Typography } from "@mui/material";
import type { Post } from "models";

type Props = {
  post: Post;
};

const PostItem: React.FC<Props> = ({ post }) => {
  const { title, body } = post;

  return (
    <Card
      sx={{
        backgroundColor: "beige",
        width: 750,
      }}
      className="post-item__container"
    >
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;
