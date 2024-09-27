import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, updatePost } from "../api/axios";
import { PostType } from "../type/post";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PostType) => createPost(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PostType) => updatePost(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data:PostType) => deletePost(data),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
      // await queryClient.invalidateQueries({queryKey:['post',{variables:id}]})
    },
  });
};
