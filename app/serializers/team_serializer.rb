class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :abrv

  binding.pry
end
