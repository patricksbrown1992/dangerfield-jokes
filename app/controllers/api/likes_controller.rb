class Api::LikesController < ApplicationController
    def index
        @user = User.find(params[:user_id])

        @likes = @user.likes
        render json: @likes, status: 200
    end
    
    def create
        @like = Like.new(like_params)
        if @like.save
            render json: @like, status: 200
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like.destroy
            render json: @like, status: 200
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def show
        @like = Like.find(params[:id])
        if @like
            render json: @like, status: 200
        else
            render json: @like.errors.full_messages, status: 404
        end
    end

    

    private

    def like_params
        params.require(:like).permit(:user_id, :joke_id, :smile, :frown)
    end
    
end