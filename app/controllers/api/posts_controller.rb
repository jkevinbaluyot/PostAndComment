class Api::PostsController < ApplicationController
  before_action :set_post, only: [:comments]

  def comments
    render json: @post.comments, each_serializer: CommentSerializer
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end
end
