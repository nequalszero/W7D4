class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    @items = @pokemon.items
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private
  def pokemon_params
    params.require(:pokeInfo).permit(:name, :attack, :defense, :poke_type, :image_url, :items, moves: [])
  end
end
