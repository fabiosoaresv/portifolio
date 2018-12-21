module ApplicationHelper
  def menu
    items = [ home, skills, contact ]
    content_tag :ul, :class => "navpils navbar-nav navbar-center" do
      items.collect { |item| concat item}
    end
  end

  def home
    link_to "Home | ", root_path
  end

  def skills
    link_to "Skills | ", skills_index_path
  end

  def contact
    link_to "Contact | ", contact_index_path
  end
end
