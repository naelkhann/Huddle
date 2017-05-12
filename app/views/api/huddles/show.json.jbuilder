json.extract! @huddle, :id, :title, :group_id, :description, :location, :moderator_id
json.group do
  json.partial! "api/groups/groups", group: @huddle.group
end
json.day @huddle.date.strftime('%a, %b %e')
json.time @huddle.date.strftime('%I:%M %p')
json.past DateTime.now > @huddle.date
json.num_members @huddle.members.length

member_ids = @huddle.members.map { |e| e.id }
if current_user
  json.is_user_attending member_ids.include? current_user.id
end

json.members do
  @huddle.members.each do |member|
    json.set! member.id do
      json.name member.name
      json.image asset_path(member.image.url)
    end
  end
end
