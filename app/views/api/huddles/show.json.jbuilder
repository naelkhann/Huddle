json.extract! @huddle, :id, :title, :group_id, :description, :location, :moderator_id
json.group do
  json.id @huddle.group.id
  json.name @huddle.group.name
  json.organizer do
    json.name @huddle.group.moderator.name
    json.image asset_path(@huddle.group.moderator.image.url)
  end
end
json.day @huddle.date.strftime('%a, %b %e')
json.time @huddle.date.strftime('%I:%M %p')
