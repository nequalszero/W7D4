json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url
# can add :items associate to achieve similar effect
json.set! "items" do
  if @items
    json.array! @items.reverse do |item|
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
