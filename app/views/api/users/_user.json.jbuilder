json.extract! user, :id, :username
json.image_url asset_path(user.image.url)

memberships_arr = []
user.memberships.each do |membership|
  memberships_arr << membership.id
end

json.memberships memberships_arr
# json.groups_users_ids groups_users_ids
