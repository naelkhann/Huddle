@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description
    json.image asset_path(group.image)
    json.members group.members, :id, :name
  end
end
