@groups.each do |group|
  json.set! group.id do
    json.extract! group, :name, :description
  end
end
