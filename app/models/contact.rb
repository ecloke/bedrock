class Contact < ActiveRecord::Base
	validates :name, :email, :subject, presence: true
end
