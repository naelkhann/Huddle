@huddles.each do |huddle|
  json.set! huddle.id do
    json.extract! huddle, :id, :title, :description, :date, :location
    json.member_count huddle.members.size
  end

end
