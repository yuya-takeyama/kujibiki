#!/usr/bin/env ruby
# coding: utf-8
require 'pusher'

Pusher.app_id = 'your_pusher_app_id'
Pusher.key    = 'your_pusher_key'
Pusher.secret = 'your_pusher_secret'

cmd = ARGV[0]

if cmd == 'begin'
  Pusher['test_channel'].trigger!('begin', {count: ARGV[1].to_i, message: 'BEGIN event'})
  puts 'Sent BEGIN event.'
elsif cmd == 'end'
  Pusher['test_channel'].trigger!('end', {message: 'END event'})
  puts 'Sent END event.'
else
  puts "Error: Invalid Command."
end
