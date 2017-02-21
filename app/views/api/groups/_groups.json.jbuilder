json.extract! group, :id, :name, :description, :moderator_id


json.huddle do
  group.huddles.each do |huddle|
    json.set! huddle.id do
      json.title huddle.title
      json.description huddle.description
      json.date huddle.date
      json.location huddle.location
      json.founded_on huddle.founded_on
      json.moderator huddle.moderator_id
    end
  end
end
