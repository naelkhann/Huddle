@huddles.each do |huddle|
  json.set! huddle.id do
    json.extract! huddle, :id, :title, :description, :date, :location
    json.num_members huddle.members.size
    json.past DateTime.now > huddle.date
    json.day huddle.date.strftime('%a, %b %e')
    json.time huddle.date.strftime('%I:%M %p')
  end
end
