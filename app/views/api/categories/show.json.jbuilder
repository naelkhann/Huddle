json.extract! @category, :id, :name, :cover
json.groups do
  json.array! @category.groups.each do |group|
    json.id group.id
    json.name group.name
    json.image asset_path(group.image)
    json.members group.members, :id, :name
  end
end
